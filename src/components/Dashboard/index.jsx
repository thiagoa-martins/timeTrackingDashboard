import React from "react";

import { Container, Content } from "./styles";

import { CardsTask } from "../CardsTask";
import { SideBar } from "../SideBar";

export function Dashboard() {
  const [filter, setFilter] = React.useState("weekly");
  const [weekly, setWeekly] = React.useState(true);
  const [daily, setDaily] = React.useState(false);
  const [monthly, setMonthly] = React.useState(false);

  return (
    <Container>
      <Content>
        <SideBar
          setFilter={setFilter}
          weekly={weekly}
          setWeekly={setWeekly}
          daily={daily}
          setDaily={setDaily}
          monthly={monthly}
          setMonthly={setMonthly}
        />
        <CardsTask filter={filter} />
      </Content>
    </Container>
  );
}
