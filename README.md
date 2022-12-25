# TypeScript-Playground

### javaScript に変換するには

- tsc ファイル名

  タイプスクリプトコンパイラー

### 実行する場合

- node ファイル名

### ES2015 に変更する場合

- tsc ファイル名 -target ES2015

### 型注釈（タイプアノテーション）

- : 以降のこと
  型推論ができない時に使用する（初期化しない時）

```
//型が any になるため何でも入ってしまう
let hello;

↓

//string 型のみ ok
let hello: string;
```

### 型推論

- 初期値や入れた値から自動的に型を推測して認識してくれる
  基本的にはこちらを使う

### 保存時に自動的に ts から js にコンパイルする方法

- watch

  tsc ファイル名 --watch
  tsc ファイル名 --w

### 全てのファイルを一気にコンパイルする方法

- tsc --init

  tsconfig.json（typescript の設定ファイル）が作成される

  - 全てのファイルを一気にコンパイル
  
    ```tsc```

  
  - 保存時に自動的に ts から js にコンパイル
  
    ```tsc --w```
  
  - 保存時に自動的に ts からじ js にコンパイル
  
   ```tsc --w```

 
