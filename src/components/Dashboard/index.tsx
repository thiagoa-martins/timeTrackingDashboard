import { Container, Content } from "./styles";

import { CardsTask } from "../CardsTask";
import { SideBar } from "../SideBar";

export function Dashboard(){
    return (
      <Container>
        <Content>
          <SideBar />
          <CardsTask />
        </Content>
      </Container>
    );
}