package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// 送りたいデータの形（設計図）を作る
type ResponseData struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// 今から返すのはJSONですよ
		w.Header().Set("Content-Type", "application/json")

		// 送るデータの中身を作る
		data := ResponseData{
			Message: "GoからJSONが届いたよ！",
			Status:  "success",
		}

		// データをJSONに変換してブラウザに送信！
		json.NewEncoder(w).Encode(data)
	})

	fmt.Println("Server running on :8080")
	http.ListenAndServe(":8080", nil)
}
