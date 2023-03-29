import { useEffect, useState, useRef } from "react";

import { Label, List, Icon, Divider, Accordion, Menu, Input, Form, TextArea, Select, Button } from "semantic-ui-react";
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
            // textAlign: "center",
            verticalAlign: "middle",
            border: "1px dashed grey",
          }}>
            <Form>
              {/*               
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='First name'
                  placeholder='First name'
                />
                <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Last name'
                  placeholder='Last name'
                />
              </Form.Group> */}
              <div>스크립트를 입력하세요</div>
              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                placeholder='기본 입력 문구'
                style={{ minHeight: 200 }}
              />
              <div>Sentiments</div>
              <Form.Field >
                <Label as='a' color="red">
                  <Icon name='heart' />
                  Happy
                </Label>
                <Label as='a' color="red">
                  <Icon name='heart' />
                  Sad
                </Label>


              </Form.Field>


              <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='joe@schmoe.com'
                error={{
                  content: 'Please enter a valid email address',
                  pointing: 'below',
                }}
              />
              <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Label with htmlFor'
              />
            </Form>

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
