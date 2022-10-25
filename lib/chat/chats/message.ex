defmodule Chat.Chats.Message do
  use Ecto.Schema
  import Ecto.Changeset
  alias Chat.Chats.Message

  schema "messages" do
    field :body, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(%Message{}= message, attrs) do
    message
    |> cast(attrs, [:name, :body])
    |> validate_required([:name, :body])
  end
end
