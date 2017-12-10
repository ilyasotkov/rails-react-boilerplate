# A hello-world Rails 5.1 app with React

This is a dockerized Ruby on Rails 5.1 app with React enabled.

## Development

```sh
docker-compose up
```

If you make any changes to the Gemfile, then run `docker-compose build` after to install the gems.

React components will hot-reload as expected, and normal `.erb` Rails views will auto-reload using `guard-livereload` gem.

## Production

```yaml
image: ilyasotkov/hello-react-rails:latest
```

The Dockerfile can be both used in production and in development.

The image is 214 MB compressed. The Dockerfile can be optimized for smaller size in production, but I chose to use 1 Dockerfile for simplicity here.

I'm actively developing solutions for automated deployment using Docker Swarm and Kubernetes.
