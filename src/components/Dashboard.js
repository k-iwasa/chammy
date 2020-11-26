import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function Dashboard() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    try {
      if (e.target.value === "") {
        throw new Error("湯婆婆エラー！！");
      }
      setName(e.target.value);
    } catch (error) {
      console.log("湯婆婆エラー出てるよ！！大変たいへん！困っちゃうよ！ぴえん");
    }
  };

  const newName = name.substr(Math.floor(Math.random() * name.length), 1);

  return (
    <>
      <div>契約書だよ。そこに名前を書きな</div>
      <TextField variant="outlined" onChange={handleChange} label="名前" />
      <div>フン。 {name}というのかい。贅沢な名だねぇ。</div>
      <div>
        今からお前の名は{newName}だ。いいかい、{newName}
        だよ。わかったら返事をするんだ、{newName}!!
      </div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
      <div>aa</div>
    </>
  );
}
