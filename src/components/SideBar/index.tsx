import { Container } from "./styles";

export function SideBar() {
  return (
    <Container>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/image-jeremy.png"} alt="Jeremy" />
        <div>
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <ul>
        <li>
          <button>Daily</button>
        </li>
        <li>
          <button>Weekly</button>
        </li>
        <li>
          <button>Monthly</button>
        </li>
      </ul>
    </Container>
  );
}
