FROM node:19-alpine3.16 as test-and-build
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci
COPY . .
# type check and eslint
RUN npm run lint
# RUN npm run test
# RUN npm run test:e2e
# 测试环境
RUN npm run build:staging

FROM nginx:1.23.3-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=test-and-build /app/dist /pages