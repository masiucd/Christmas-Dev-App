import { assign, createMachine } from "xstate"

interface TimeContext {
  duration: number
  elapsed: number
  interval: number
}

type TimeEvent =
  | { type: "TOGGLE" }
  | { type: "RESET" }
  | { type: "ADD_MINUTE" }
  | { type: "TICK" }

const timerMachine = createMachine<TimeContext, TimeEvent>(
  {
    id: "timer",
    initial: "idle",
    context: {
      duration: 60,
      elapsed: 0.1,
      interval: 0.1,
    },
    states: {
      idle: {
        entry: "resetTimer",
        on: {
          TOGGLE: {
            target: "running",
          },
        },
      },
      // state
      running: {
        on: {
          // event
          TICK: {
            actions: ["tick"],
          },
          // event
          TOGGLE: {
            target: "paused",
          },
          ADD_MINUTE: {
            actions: ["addMinute"],
          },
        },
      },
      paused: {
        on: {
          TOGGLE: {
            target: "running",
          },
          RESET: {
            target: "idle",
          },
        },
      },
    },
  },
  {
    actions: {
      resetTimer: assign({
        duration: 60,
        elapsed: 0.1,
        interval: 0.1,
      }),

      addMinute: assign({
        duration: (ctx: TimeContext) => ctx.duration + 60,
      }),
      tick: assign({
        elapsed: (ctx: TimeContext) => ctx.elapsed + ctx.interval,
      }),
    },
  }
)

export default timerMachine
