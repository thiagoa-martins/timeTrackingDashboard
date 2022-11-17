import data from "../../data.json";

import { Container } from "./styles";

export function CardsTask() {
  return (
    <>
      {data.map((task) => {
        console.log(task.icon);
        return (
          <Container
            key={task.title}
            style={{
              backgroundImage: `url('${task.icon})}')`,
              backgroundColor: task.background,
            }}
          >
            <img
              src={process.env.PUBLIC_URL + task.icon}
              alt={task.title}
            />
            <article>
              <header>
                <strong>{task.title}</strong>
                <button>
                  <img src={process.env.PUBLIC_URL + "images/icon-ellipsis.svg"} alt="Ellipsis" />
                </button>
              </header>

              <h2>{task.timeframes.weekly.current}hrs</h2>

              <span>Last Week - {task.timeframes.weekly.previous}hrs</span>
            </article>
          </Container>
        );
      })}
    </>
  );
}
