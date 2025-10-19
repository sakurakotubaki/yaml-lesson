# What YAML?
YAML (「YAML Ain't Markup Language」の再帰的頭字語) は、人間に優しく、日常の一般的なタスクで最新のプログラミング言語とうまく連携するように設計されたデータシリアル化言語です。

 プログラミング言語ではない！

 データ構造には多くの種類がありますが、それらはすべて 、マッピング(ハッシュ/辞書)、 シーケンス(配列/リスト)、およびスカラー(文字列/数値)という 3 つの基本的なプリミティブで適切に表現できます。YAML はこれらのプリミティブを活用し、単純な型指定システムとエイリアシングメカニズムを追加して、ネイティブデータ構造をシリアル化する ための完全な言語を形成します。ほとんどのプログラミング言語はデータのシリアル化に YAML を使用できますが、YAML は基本的に 3 つの基本プリミティブを中心に構築された言語との連携に優れています。

##  YAMLの使い方について

値の書き方に種類がある。とはいえ、バリエーションが多くて全部は紹介するの大変なので、よく見る書き方を解説

* Scalars(スカラー型)が、数値、文字、bool型.
* Sequence(シーケンス)が、配列・List.
* Mapping(マッピング)が、マップ.
* コメントをつけるときは、#をつける.

yamlをjsonに変換するサービスを使用するとどのようなデータ構造か理解できると思います。

https://eemeli.org/yaml-playground/

![alt text](<CleanShot 2025-09-07 at 19.57.45.png>)

[CloudFormation テンプレート形式のバージョン構文](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/format-version-structure.html)

[組み込み関数](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference.html)

| 関数（省略） | 関数（完全） | 説明 |
|-------------|-------------|------|
| !Ref | Ref: | パラメータ、リソースの属性を参照 |
| !Sub | Fn::Sub: | パラメータ、リソースの属性を参照、文字列結合 |
| !GetAtt | Fn::GetAtt: | 任意に指定した属性を参照 |
| !FindInMap | Fn::FindInMap: | マップからキーに合致する値を参照 |
| !ImportValue | Fn::ImportValue: | 他のスタックから値のインポート |
| !Equals | Fn::Equals: | Conditions の条件式で利用。値が一致するか判定 |