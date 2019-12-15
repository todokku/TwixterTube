class Api::VideosController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]
    
    def show
        
        @video = Video.find(params[:id])
        render :show
    end

    def index
        # shuffle does not work for some reason
        # limit capacity of what videos show up on on index page
        # @videos = Video.all.take(40) 
        @videos = Video.first(40) # method is superior due to not having to query all videos then 
                                  # truncate array for 40 videos, former method really uneffecient
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
        if @video.update(video_params_edit)
            render :show
        else
            render json: @video.errors.full_messages, status: 412
        end
    end

    def view_update
        # debugger
        @video = Video.find(params[:id])
        if @video.update(video_params_edit_views)

            render :show
        else
            render json: @video.errors.full_messages, status: 422
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

    def video_params_edit
        params.require(:video).permit(:title, :description)
    end

    def video_params_edit_views
        params.require(:video).permit(:views)
    end

end
