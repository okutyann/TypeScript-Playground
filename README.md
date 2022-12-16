# TypeScript-Playground

- javaScript に変換するには

  - tsc ファイル名 ==> タイプスクリプトコンパイラー

- 実行する場合

  - node ファイル名

- ES2015 に変更する場合

  - tsc ファイル名 -target ES2015

- 型注釈（タイプアノテーション）

  - : 以降のこと
    型推論ができない時に使用する（初期化しない時）
    let hello;(型が any になるため何でも入ってしまう)
    →let hello: string;(string 型のみ ok)

- 型推論
  - 初期値や入れた値から自動的に型を推測して認識してくれる
    基本的にはこちらを使う
