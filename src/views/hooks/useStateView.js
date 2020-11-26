import React from "react";
import { useState } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { Container } from "@material-ui/core";

function useStateView() {
  const [count, setCount] = useState(0);
  

  return (
      <Container>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <Typography>{count}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </Container>
  );
}

export default useStateView;
