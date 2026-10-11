class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    addPoint(point) {
        this.points.push(point);
    }

    containtPoint(point) {
        return this.points.find((p) => p.equals(point));
    }
    tryAddPoint(point) {
        if (!this.containtPoint(point)) {
            this.addPoint(point);
            return true;
        }
        return false;
    }

    removePoint(point) {
        const segs = this.getSegmentsWithPoint(point);
        for (const seg of segs) {
            this.removeSegment(seg);
        }
        this.points.splice(this.points.indexOf(point), 1);
    }

    addSegment(seg) {
        this.segments.push(seg);
    }

    containtSegment(seg) {
        return this.segments.find((s) => s.equals(seg) && !seg.p1.equals(seg.p2) );
    }

    tryAddSegment(seg) {
        if (!this.containtSegment(seg)) {
            this.addSegment(seg);
            return true;
        }
        return false;
    }

    removeSegment(seg) {
        this.segments.splice(this.segments.indexOf(seg), 1);
    }

    getSegmentsWithPoint(point) {
        const segs = [];
        for (const seg of this.segments) {
            if (seg.includes(point)) {
                segs.push(seg);
            }
        }
        return segs;
    }

    draw(ctx) {
        for (const seg of this.segments) {
            seg.draw(ctx);
        }
        for (const point of this.points) {
            point.draw(ctx);
        }
    }
}