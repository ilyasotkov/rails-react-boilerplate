FROM ruby:2.4.2-alpine

ENV INSTALL_PATH /site
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

COPY Gemfile Gemfile.lock ./

RUN apk add --no-cache --update --upgrade --virtual .build-deps \
        build-base \
        linux-headers \
        zlib-dev \
        libxml2-dev \
        libxslt-dev \
        \
        && apk add --no-cache \
        tzdata \
        git \
        yaml-dev \
        postgresql-dev \
        bash \
        nodejs \
        make \
        \
        && npm install --global yarn \
        \
        && gem install bundler \
        && bundle config build.nokogiri --use-system-libraries \
        && bundle install

COPY rails-gen-react-app /bin/rails-gen-react-app.sh
