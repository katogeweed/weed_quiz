package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// 送りたいデータの形（設計図）を作る
type Quiz struct {
	ID      int      `json:"id"`
	Context string   `json:"context"`
	Options []string `json:"options"`
	Answer  string   `json:"answer"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		//CORSを発行する。これにより、セキュリティの壁を突破してReactがgoのデータを受け取れるようになる。
		w.Header().Set("Access-Control-Allow-Origin", "*")
		// 今から返すのはJSONですよ
		w.Header().Set("Content-Type", "application/json")

		// 送るデータの中身を作る
		quizzes := []Quiz{
			{ID: 1, Context: "ペンペン草の別名は？", Options: []string{"ナズナ", "ハコベラ", "スズシロ"}, Answer: "ナズナ"},
			{ID: 2, Context: "踏まれても強いカエルバは？", Options: []string{"オオバコ", "スギナ", "ノゲシ"}, Answer: "オオバコ"},
		}

		// データをJSONに変換してブラウザに送信！
		json.NewEncoder(w).Encode(quizzes)
	})

	fmt.Println("Server running on :8080")
	http.ListenAndServe(":8080", nil)
}
