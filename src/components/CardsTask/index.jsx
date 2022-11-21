import data from "../../data.json";

import { Container } from "./styles";

export function CardsTask({ filter }) {
  return (
    <>
      {data.map((task) => {
        return (
          <Container
            key={task.title}
            style={{
              backgroundImage: `url('${task.icon})}')`,
              backgroundColor: task.background,
            }}
          >
            <img src={process.env.PUBLIC_URL + task.icon} alt={task.title} />
            <article>
              <header>
                <strong>{task.title}</strong>
                <button>
                  <img
                    src={process.env.PUBLIC_URL + "images/icon-ellipsis.svg"}
                    alt="Ellipsis"
                  />
                </button>
              </header>

              <h2>{task.timeframes[filter].current}hrs</h2>

              <span>Last Week - {task.timeframes[filter].previous}hrs</span>
            </article>
          </Container>
        );
      })}
    </>
  );
}
