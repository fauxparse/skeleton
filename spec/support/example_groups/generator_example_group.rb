module GeneratorExampleGroup
  extend ActiveSupport::Concern

  RSpec.configure do |config|
    config.include self, type: :generator, file_path: %r{spec/generators}
  end
end
