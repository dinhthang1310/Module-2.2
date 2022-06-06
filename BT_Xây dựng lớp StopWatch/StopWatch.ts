export  class StopWatch {
    private _startTime : number;
    private _endTime : number = 0;

    constructor() {
        this._startTime = new Date().getMilliseconds()

    }

    getStartTime(): number {
        return this._startTime;
    }

    setStartTime(value: number) {
        this._startTime = value;
    }

    getEndTime(): number {
        return this._endTime;
    }

    setEndTime(value: number) {
        this._endTime = value;
    }
    start():void {
        this._startTime = new Date().getMilliseconds()
    }
    stop():void {
        this._endTime = new Date().getMilliseconds()
    }
    getElap():number{
        return this._endTime - this._startTime
    }

}
