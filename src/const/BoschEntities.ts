enum EBoschEntity {
    active_program,
    base_program,
    connected,
    door_state,
    operation_state,
    program_name,
    programs,
    remaining_program_time_is_estimated,
    remote_control_active,
    remote_control_start_allowed,
    selected_program,
}

const boschEntitiesMap: Map<EBoschEntity, BoschEntity> = new Map([
    [EBoschEntity.active_program, { type: "sensor", suffix: "active_program" }],
    [EBoschEntity.base_program, { type: "sensor", suffix: "bsh_common_option_baseprogram" }],
    [EBoschEntity.connected, { type: "binary_sensor", suffix: "connected" }],
    [EBoschEntity.door_state, { type: "binary_sensor", suffix: "bsh_common_status_doorstate" }],
    [EBoschEntity.operation_state, { type: "sensor", suffix: "bsh_common_status_operationstate" }],
    [EBoschEntity.program_name, { type: "sensor", suffix: "bsh_common_option_programname" }],
    [EBoschEntity.programs, { type: "select", suffix: "programs" }],
    [EBoschEntity.remaining_program_time_is_estimated, { type: "binary_sensor", suffix: "bsh_common_option_remainingprogramtimeisestimated" }],
    [EBoschEntity.remote_control_active, { type: "binary_sensor", suffix: "bsh_common_status_remotecontrolactive" }],
    [EBoschEntity.remote_control_start_allowed, { type: "binary_sensor", suffix: "bsh_common_status_remotecontrolstartallowed" }],
    [EBoschEntity.selected_program, { type: "sensor", suffix: "selected_program" }],
]);

const boschFeatureEntitiesMap: Map<EBoschFeature, EBoschEntity[]> = new Map([
    [EBoschFeature.dishwasher_programs, [
        EBoschEntity.active_program,
        EBoschEntity.base_program,
        EBoschEntity.connected,
        EBoschEntity.door_state,
        EBoschEntity.operation_state,
        EBoschEntity.program_name,
        EBoschEntity.programs,
        EBoschEntity.remaining_program_time_is_estimated,
        EBoschEntity.remote_control_active,
        EBoschEntity.remote_control_start_allowed,
        EBoschEntity.selected_program,
    ]],
]);
