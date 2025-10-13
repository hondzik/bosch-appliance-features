
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequireeb14"];
var parcelRegister = parcelRequire.register;
parcelRegister("8nEhd", function(module, exports) {

$parcel$export(module.exports, "BoschDishwasherProgramsEditor", () => $a3d36398cbb8abc5$export$5ad3d821964e0a36);

var $g3RrC = parcelRequire("g3RrC");

var $lWzv2 = parcelRequire("lWzv2");

var $egQhz = parcelRequire("egQhz");

var $fmsP2 = parcelRequire("fmsP2");

var $eDJg6 = parcelRequire("eDJg6");
class $a3d36398cbb8abc5$export$5ad3d821964e0a36 extends (0, $lWzv2.LitElement) {
    setConfig(config) {
        this.config = {
            ...config
        };
    }
    render() {
        return (0, $lWzv2.html)`
            <div class="settings">
                ${this.getBoolHaSettingsRow("show_as_button_bar", false)}
                ${this.getBoolHaSettingsRow("icons_with_text", false)}
                ${this.getBoolHaSettingsRow("show_machinecare", true)}
            </div>
        `;
    }
    getBoolHaSettingsRow(key, defaultVal) {
        const customLocalize = (0, $fmsP2.default)(this.hass);
        return (0, $lWzv2.html)`
            <ha-settings-row>
                <div slot="heading" data-for="${key}">${customLocalize(`dishwasher.programs.editor.${key}.title`)}</div>
                <div slot="description" data-for="${key}">${customLocalize(`dishwasher.programs.editor.${key}.description`)}</div>
                <ha-switch id="${key}" name="${key}" @change=${this._onSettingChange} .checked=${this.getBoolConfigVal(key, defaultVal)} />
            </ha-settings-row>
        `;
    }
    _onSettingChange(e) {
        const target = e.target;
        const key = target.id || target.name;
        const value = target.checked ?? target.value;
        this._updateConfig({
            ...this.config,
            [key]: value
        });
    }
    getBoolConfigVal(key, defaultValue) {
        return this.config && this.config[key] !== undefined ? !!this.config[key] : defaultValue;
    }
    _updateConfig(newConfig) {
        this.config = newConfig;
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: {
                config: this.config
            },
            bubbles: true,
            composed: true
        }));
    }
    static get styles() {
        return 0, $eDJg6.BoschDishwasherProgramsEditorStyles;
    }
}
(0, $g3RrC.__decorate)([
    (0, $egQhz.property)({
        attribute: false
    })
], $a3d36398cbb8abc5$export$5ad3d821964e0a36.prototype, "hass", void 0);
(0, $g3RrC.__decorate)([
    (0, $egQhz.property)({
        type: Object
    })
], $a3d36398cbb8abc5$export$5ad3d821964e0a36.prototype, "config", void 0);
$a3d36398cbb8abc5$export$5ad3d821964e0a36 = (0, $g3RrC.__decorate)([
    (0, $egQhz.customElement)("bosch-dishwasher-programs-editor")
], $a3d36398cbb8abc5$export$5ad3d821964e0a36);

});


