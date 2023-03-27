import { useEffect, useState, useRef } from "react";

import { List, Icon, Divider, Accordion, Menu, Form } from "semantic-ui-react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  // const [time, setTime] = useState();


  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          border: "1px dashed grey",
        }}
      >

        <div
          style={{
            fontSize: 20,
            paddingBottom: 10,
            width: "100%",
            fontWeight: "bold",
            // border: "5px dashed grey",
          }}
        >
          <Icon name="angle right" />
          트위터 문구 생성
        </div>


        <div style={{
          width: "100%",
          display: "flex",
          // border: "1px dashed grey",
        }}
        >

          <div style={{
            width: "50%",
            height: "500px",
            padding: 10,
            margin: 10,
            textAlign: "center",
            verticalAlign: "middle",
            border: "1px dashed grey",
          }}>
            입력 조건 작성 영역

          </div>

          <div style={{
            width: "50%",
            height: "500px",
            padding: 10,
            margin: 10,
            textAlign: "center",
            border: "1px dashed grey",
          }}>
            생성 결과 표시 영역

          </div>

        </div>
      </div>


    </>
  );
}


Main.getInitialProps = async (ctx) => {
  const pathname = ctx.pathname;

  return { pathname };
};
