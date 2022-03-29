FROM golang:1.18-alpine AS builder

WORKDIR /usr/src/app
COPY ./app/ .

ENTRYPOINT [ "go","build" ]

FROM scratch

COPY --from=builder /usr/src/app/codeeducation .

ENTRYPOINT ["./codeeducation"]