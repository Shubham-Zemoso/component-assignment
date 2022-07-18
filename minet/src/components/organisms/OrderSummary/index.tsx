import { Card, CardActions } from "@mui/material";
import React from "react";
import ButtonAtom from "../../atoms/ButtonAtom";

interface Props {
  sell: boolean;
}

const OrderSummary = (props: Props) => {
  return (
    <div>
      <Card>
        {/* order details */}
        {/* order details */}
        <CardActions>
          <ButtonAtom>{props.sell ? "Sell" : "Buy"}</ButtonAtom>
        </CardActions>
      </Card>
    </div>
  );
};

export default OrderSummary;
