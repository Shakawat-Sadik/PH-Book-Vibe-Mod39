import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";

const GoBackOrHome = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <ButtonGroup>
        <Button onClick={() => nav(-1)}>Go Back</Button>
        <ButtonGroupSeparator></ButtonGroupSeparator>
        <Button onClick={() => nav("/")}>Go Home</Button>
      </ButtonGroup>
    </div>
  );
};

export default GoBackOrHome;
