require 'simplecov_json_formatter'
require 'simplecov-summary'

SimpleCov.start 'rails' do
  coverage_dir 'coverage/rails'

  add_filter 'app/mailers/application_mailer.rb'
  add_filter 'app/channels'
  add_filter 'app/jobs/application_job.rb'
  add_filter 'app/graphql/types/node_type.rb'
  add_filter 'app/graphql/subscriptions/test_subscription.rb'
  add_filter do |src_file|
    File.basename(src_file.filename) =~ /^(base_|application_)/
  end

  add_filter do |source_file|
    source_file.lines.count <= 6
  end

  add_group 'GraphQL', 'app/graphql'
  add_group 'Interactors', 'app/interactors'

  formatter SimpleCov::Formatter::MultiFormatter.new([
    SimpleCov::Formatter::JSONFormatter,
    SimpleCov::Formatter::HTMLFormatter,
    SimpleCov::Formatter::SummaryFormatter,
  ])
end
