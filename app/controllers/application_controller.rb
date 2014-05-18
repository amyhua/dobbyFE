class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def fake_bids
    render json: Fake.bids
  end

  def fake_available_dobbies
    render json: Fake.available_dobbies
  end

  def profiles
    render json: Fake.profiles
  end

  def new_job
    params["job"]
  end
end
