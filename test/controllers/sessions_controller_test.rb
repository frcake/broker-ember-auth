require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get passwords" do
    get sessions_passwords_url
    assert_response :success
  end

end
