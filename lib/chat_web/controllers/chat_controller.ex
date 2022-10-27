defmodule ChatWeb.ChatController do
  use ChatWeb, :controller

  def show(conn, %{"id" => room}) do
    render(conn, "show.html", room: room)
  end
end
