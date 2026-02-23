import http from "k6/http";
import { check } from "k6";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 200 }, // subida progresiva
    { duration: "30s", target: 500 },
    { duration: "30s", target: 1000 }, // 1000 usuarios
    { duration: "1m", target: 1000 }, // mantener carga
    { duration: "30s", target: 0 }, // bajada
  ],
  thresholds: {
    http_req_duration: ["p(95)<5000"], // 95% bajo 5 segundos
  },
};

export default function () {
  const res = http.get("http://localhost:9966/petclinic/api/owners");

  check(res, {
    "status es 200": (r) => r.status === 200,
  });

  sleep(1);
}
