import { nodeEvents, checkboxEvents, dragEvents } from '../../src/misc/nodeEvents';

test("Check node Events", () => {
    expect(nodeEvents).toMatchObject({
        opened: "nodeOpened",
        closed: "nodeClosed",
        focus: "nodeFocus",
        toggle: "nodeToggle",
        blur: "nodeBlur",
        edit: "nodeEdit",
        update: "nodeUpdate",
    });
});

test("Check checkbox Events", () => {
    expect(checkboxEvents).toMatchObject({
        checked: "nodeChecked",
        unchecked: "nodeUnchecked"
    });
});

test("Check drag Events", () => {
    expect(dragEvents).toMatchObject({
        start: "nodeDragstart",
        end: "nodeDragend",
        enter: "nodeDragenter",
        leave: "nodeDragleave",
        over: "nodeOver",
        drop: "nodeDrop"
    });
});