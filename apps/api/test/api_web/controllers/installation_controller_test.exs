defmodule ApiWeb.InstallationControllerTest do
  use ApiWeb.ConnCase, async: true

  describe "#create/2" do
    test "Users can create installations of repositories", %{conn: conn} do
      repository = insert(:repository)
      path = Routes.installation_path(conn, :create)
      user = insert(:user)

      result =
        conn
        |> authorized(user)
        |> post(path, %{repository_id: repository.id})
        |> json_response(200)

      assert result["user_id"] == user.id
      assert result["repository_id"] == repository.id
    end
  end
end