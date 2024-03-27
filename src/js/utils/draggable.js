import { setDraggableItems } from "../components/attachDraggable";

const draggingClass = 'is-dragging';

class draggable {

    constructor(element, node = [document]) {
        this.node = node;
        this.el = element;

        if (this.el) {
            this.mouseDown = this.mouseDown.bind(this);
            this.mouseUp = this.mouseUp.bind(this);
            this.mouseMove = this.mouseMove.bind(this);
        }
    }

    setHandle(handle) {
        this.handle = handle;
        return this;
    }

    setCallback(callback) {
        this.callback = callback;
        return this;
    }

    mouseDown(event) {
        if (this.callback?.start) {
            this.callback.start(event, this.el);
        } else {
            this.el.classList.add(draggingClass);
        }
        for (const node of this.node) {
            node.addEventListener('mouseup', this.mouseUp);
            node.addEventListener('mousemove', this.mouseMove);
            node.addEventListener('mouseleave', this.mouseUp);
        }
        this.el.addEventListener('mouseleave', this.mouseUp);
    }

    mouseUp(event) {
        if (this.callback?.end) {
            this.callback.end(event, this.el);
        } else { 
            this.el.classList.remove(draggingClass);
        }
        for (const node of this.node) {
            node.removeEventListener('mouseup', this.mouseUp);
            node.removeEventListener('mousemove', this.mouseMove);
            node.removeEventListener('mouseleave', this.mouseUp);
        }
        this.el.removeEventListener('mouseleave', this.mouseUp);
    }

    mouseMove(event) {
        if (this.callback?.move) {
            this.callback.move(event, this.el);
        } else {
            const style = window.getComputedStyle(this.el);
            const x = (parseFloat(style.getPropertyValue('left')) || 0) + event.movementX;
            const y = (parseFloat(style.getPropertyValue('top')) || 0) + event.movementY;
            const rect = this.el.getBoundingClientRect();
            const viewHeight = window.innerHeight || document.documentElement.clientHeight;
            const viewWidth = window.innerWidth || document.documentElement.clientWidth;
            const maxX = viewWidth - rect.width;
            const maxY = viewHeight - rect.height;
            const constrainedX = Math.max(0, Math.min(x, maxX));
            const constrainedY = Math.max(0, Math.min(y, maxY));
            this.el.style.position = 'absolute';
            this.el.style.top = constrainedY + 'px';
            this.el.style.left = constrainedX + 'px';
        }
    }

    run() {
        const handle = this.handle ?? this.el;
        handle.addEventListener('mousedown', this.mouseDown);
    }

    stop() {
        const handle = this.handle ?? this.el;
        handle.removeEventListener('mousedown', this.mouseDown);
    }
}

export { draggable };
