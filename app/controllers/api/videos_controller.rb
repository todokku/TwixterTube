class Api::VideosController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]
    
    def show
        @video = Video.find(params[:id])
        render :show
    end

    def index
        @videos = Video.all
        render :index
    end

    def create
        @video = Video.new(video_params)
        @video.views = 0
        @video.uploader_id = current_user.id
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @video = current_user.videos.find(params[:id])
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 412
        end
    end

    def destroy
        @video = current_user.videos.find(params[:id])
        @video.destroy
        render :show
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :vid, :thumbnail)
    end

end
