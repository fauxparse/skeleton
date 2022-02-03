require 'graphql/rake_task'

GraphQL::RakeTask.new(
  schema_name: 'SkeletonSchema',
  directory: './app/javascript/graphql',
  dependencies: [:environment]
)
