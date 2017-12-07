# A hello-world Rails 5.1 app with React

This is a dockerized Ruby on Rails 5.1 with React enabled.

## Development

```sh
docker-compose up
```

If you make any changes to the Gemfile, then run `docker-compose build` after to install the gems.

React components will hot-reload as expected, and normal `.erb` Rails views will be auto-reloaded on change using `guard-livereload` gem.

## Production

```yaml
image: ilyasotkov/hello-react-rails:latest
```

The Dockerfile can be used in production. The compressed size of the image is 153 MB.

I'm currently actively developing solutions for automated deployment using Docker Swarm and Kubernetes.

The Dockerfile can be optimized for smaller size, but I chose to use 1 Dockerfile for simplicity here.
