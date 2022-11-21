import { Container } from "./styles";

export function SideBar({
  setFilter,
  weekly,
  setWeekly,
  daily,
  setDaily,
  monthly,
  setMonthly,
}) {
  return (
    <Container weekly={weekly} daily={daily} monthly={monthly}>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/image-jeremy.png"}
          alt="Jeremy"
        />
        <div>
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <ul>
        <li>
          <button
            className="btn-daily"
            onClick={() => {
              setFilter("daily");
              if (!daily) setDaily(true);
              setWeekly(false);
              setMonthly(false);
            }}
          >
            Daily
          </button>
        </li>
        <li>
          <button
            className="btn-weekly"
            onClick={() => {
              setFilter("weekly");
              if (!weekly) setWeekly(true);
              setDaily(false);
              setMonthly(false);
            }}
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            className="btn-monthly"
            onClick={() => {
              setFilter("monthly");
              if (!monthly) setMonthly(true);
              setDaily(false);
              setWeekly(false);
            }}
          >
            Monthly
          </button>
        </li>
      </ul>
    </Container>
  );
}
