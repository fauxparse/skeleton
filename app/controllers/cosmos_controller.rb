# frozen_string_literal: true

class CosmosController < ApplicationController
  def index
    response.headers.delete('X-Frame-Options')
    response.headers['Access-Control-Allow-Origin'] = '*'
  end
end
