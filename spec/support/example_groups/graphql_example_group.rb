module GraphQLExampleGroup
  extend ActiveSupport::Concern

  included do
    subject(:execute) do
      SkeletonSchema.execute(
        query,
        variables: variables,
        context: {},
        operation_name: operation_name
      )
    end

    let(:variables) { {} }

    let(:operation_name) { described_class.name.demodulize }

    let(:result) do
      execute.deep_transform_keys { |key| key.to_s.underscore.to_sym }
    end

    let(:data) { result[:data] }

    let(:errors) { result[:errors] }
  end

  def interactor_context(**args)
    Interactor::Context.new(**args)
  end

  def successful(**args)
    interactor_context(**args)
  end

  def failed(message: 'failure', **args)
    interactor_context(**args).tap { |c| c.fail!(error: message) }
  end

  RSpec.configure do |config|
    config.include self, type: :resolver, file_path: %r{spec/graphql/resolvers}
    config.include self, type: :mutation, file_path: %r{spec/graphql/mutations}
  end
end
