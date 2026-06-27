export type Quiz = {      //型の名前はパスカルケースで表す
    id : number,
    context : string,
    choices : string[], //文字列の配列を表現する時の書き方
    correct : number
}