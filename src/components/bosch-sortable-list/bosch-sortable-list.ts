import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BoschSortableListStyles } from './bosch-sortable-list-styles';
import type { CSSResultGroup, TemplateResult } from 'lit';

export interface BoschSortableListItem {
  id: string;
  label: string;
  dimmed?: boolean;
}

type DropPosition = 'top' | 'bottom';

@customElement('bosch-sortable-list')
export class BoschSortableList extends LitElement {
  @property({ attribute: false })
  public items: BoschSortableListItem[] = [];

  @property({ attribute: false })
  public renderLeading?: (item: BoschSortableListItem) => TemplateResult;

  @property({ attribute: false })
  public renderTrailing?: (item: BoschSortableListItem) => TemplateResult;

  @state()
  private _draggedId?: string;

  @state()
  private _dropTarget?: { id: string; position: DropPosition };

  protected render(): TemplateResult {
    return html` <div class="sortable-list">${this.items.map((item) => this.renderItem(item))}</div> `;
  }

  private renderItem(item: BoschSortableListItem): TemplateResult {
    const isDragging = this._draggedId === item.id;
    const showTop = this._dropTarget?.id === item.id && this._dropTarget.position === 'top';
    const showBottom = this._dropTarget?.id === item.id && this._dropTarget.position === 'bottom';

    return html`
      <div
        class="list-item ${isDragging ? 'dragging' : ''} ${item.dimmed ? 'dimmed' : ''}"
        draggable="true"
        @dragstart=${(e: DragEvent) => this.onDragStart(e, item)}
        @dragend=${() => this.onDragEnd()}
        @dragover=${(e: DragEvent) => this.onDragOver(e, item)}
        @dragleave=${(e: DragEvent) => this.onDragLeave(e, item)}
        @drop=${(e: DragEvent) => this.onDrop(e, item)}
      >
        <div class="drop-indicator top ${showTop ? 'show' : ''}"></div>
        <div class="drop-indicator bottom ${showBottom ? 'show' : ''}"></div>
        <span class="drag-handle">⋮⋮</span>
        ${this.renderLeading ? html`<div class="item-leading">${this.renderLeading(item)}</div>` : ''}
        <div class="item-content">${item.label}</div>
        ${this.renderTrailing ? html`<div class="item-trailing">${this.renderTrailing(item)}</div>` : ''}
      </div>
    `;
  }

  private onDragStart(e: DragEvent, item: BoschSortableListItem): void {
    this._draggedId = item.id;
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
    }
  }

  private onDragEnd(): void {
    this._draggedId = undefined;
    this._dropTarget = undefined;
  }

  private onDragOver(e: DragEvent, item: BoschSortableListItem): void {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }

    if (item.id === this._draggedId) {
      return;
    }

    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    this._dropTarget = { id: item.id, position: e.clientY < midpoint ? 'top' : 'bottom' };
  }

  private onDragLeave(e: DragEvent, item: BoschSortableListItem): void {
    if (this._dropTarget?.id === item.id && e.target === e.currentTarget) {
      this._dropTarget = undefined;
    }
  }

  private onDrop(e: DragEvent, item: BoschSortableListItem): void {
    e.preventDefault();
    e.stopPropagation();

    const draggedId = this._draggedId;
    const position = this._dropTarget?.position;
    this._dropTarget = undefined;

    if (!draggedId || draggedId === item.id) {
      return;
    }

    const items = [...this.items];
    const fromIndex = items.findIndex((i) => i.id === draggedId);
    if (fromIndex === -1) {
      return;
    }
    const [moved] = items.splice(fromIndex, 1);

    let toIndex = items.findIndex((i) => i.id === item.id);
    if (position === 'bottom') {
      toIndex += 1;
    }
    items.splice(toIndex, 0, moved);

    this.items = items;
    this.dispatchEvent(
      new CustomEvent('reorder', {
        detail: { items },
        bubbles: true,
        composed: true,
      }),
    );
  }

  public static get styles(): CSSResultGroup {
    return BoschSortableListStyles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bosch-sortable-list': BoschSortableList;
  }
}
