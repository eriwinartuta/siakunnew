import React from "react";
import { Result, Button } from "antd";

const ErrorView = ({onClick}) => (
  <Result
    status="500"
    title="500"
    subTitle="Mohon maaf, Silahkan coba kembali."
    extra={<Button type="primary" onClick={onClick}> Coba Lagi </Button>}
  />
);

export default ErrorView;
