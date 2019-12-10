class Api::LikesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def show
    end

    def create
        @like = Like.new(create_like_params)
        @like.user_id = current_user.id
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def update
        @like = Like.find(params[:id])
        if @like.user_id == current_user.id
            if @like.update(update_like_params)
                render :show
            else
                render json: @like.errors.full_messages, status: 422
            end
        else
            render json: ['Must be owner of like to edit'], status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like.user_id == current_user.id
            @like.destroy
            render :show
        else
            render json: ['Must be owner of like to edit'], status: 422
        end
    end

    private

    def create_like_params
        params.require(:like).permit(:likeable_id, :likeable_type, :liked)
    end

    def update_like_params
        params.require(:like).permit(:liked)
    end

    # def receive_like_params
    #     params.require(:like).permit()
    # end
end
