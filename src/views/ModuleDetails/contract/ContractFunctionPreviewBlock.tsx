import React from "react";
import { FunctionFragment } from "@ethersproject/abi";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Collapsable } from "../../../components/Collapsable";
import { ContractFunctionHeader } from "./ContractFunctionHeader";
import {isBasicFunction, isOneResult} from "../../../utils/contracts";
import { Row } from "../../../components/layout/Row";
import { ArrowIcon } from "../../../components/icons/ArrowIcon";

interface ContractFunctionPreviewBlockProps {
  func: FunctionFragment;
}

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 0.5,
  },
  expandIcon: {
    marginLeft: theme.spacing(2),
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  title: {
    marginRight: theme.spacing(1),
  },
}));

export const ContractFunctionPreviewBlock = ({
  func,
}: ContractFunctionPreviewBlockProps) => {
  const classes = useStyles();

  const isBasic = isBasicFunction(func);
  const oneResult = isOneResult(func);

  const shrink = isBasic && oneResult;

  return (
    <Collapsable className={classes.root}>
      <Row alignItems="center">
        <Typography variant="h6" className={classes.title}>
          {func.name}
        </Typography>
        <Box flexGrow={1} />
        <ContractFunctionHeader
          func={func}
          showResult={shrink}
          result={
            shrink ? ["0x0000000000000000000000000000000000000000"] : undefined
          }
        />
        {!shrink ? <ArrowIcon className={classes.expandIcon} /> : null}
      </Row>
    </Collapsable>
  );
};