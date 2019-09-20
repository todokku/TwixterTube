# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Video.destroy_all

user_1 = User.create!(username: 'd116', email: 'd116@mail.com', password: 123456)
user_2 = User.create!(username: 'silentWraith', email: 'silentWraith@mail.com', password: 123456)

# Video.create!(title: 'Eric Andre - Wall Street', uploader_id: 1, views: 0, description: 'Eric displaying business acuity')

video1 = Video.create(title: "Battlefield 3 Team Killing, Fails and Angry Reactions", description: "Playing the game the way it's meant to be played", views: 13432, uploader_id: user_1.id)
   vfile1 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/Battlefield+3+Team+Killing%2C+Fails+and+Angry+Reactions.mp4")
   video1.vid.attach(io: vfile1, filename: "Battlefield 3 Team Killing, Fails and Angry Reactions.mp4")
   pfile1 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/BATTLEFIELD_3_TEAMKILLING.png")
   video1.thumbnail.attach(io: pfile1, filename: "BATTLEFIELD_3_TEAMKILLING.png")

video2 = Video.create(title: "Eric_Andre-Wall_Street", description: "Eric Andre Displaying Business Acuity", views: 13432, uploader_id: user_1.id)
   vfile2 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/Eric_Andre-Wall_Street.mp4")
   video2.vid.attach(io: vfile2, filename: "Eric_Andre-Wall_Street.mp4")
   pfile2 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/Eric_Andre_WallStreet_Screenshot.png")
   video2.thumbnail.attach(io: pfile2, filename: "Eric_Andre_WallStreet_Screenshot.png")

video3 = Video.create(title: "GSXR vs State trooper", description: "Tickets are too expensive nowadays, alternative to save money.", views: 13432, uploader_id: user_1.id)
   vfile3 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/GSXR+vs+State+trooper.mp4")
   video3.vid.attach(io: vfile3, filename: "GSXR vs State trooper.mp4")
   pfile3 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/GSXR_vs_State_Trooper.png")
   video3.thumbnail.attach(io: pfile3, filename: "GSXR_vs_State_Trooper.png")

video4 = Video.create(title: "RendeZook (Only in Battlefield 3 Edit)", description: "Awesome eject kill", views: 13432, uploader_id: user_2.id)
   vfile4 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/RendeZook+(Only+in+Battlefield+3+Edit).mp4")
   video4.vid.attach(io: vfile4, filename: "RendeZook (Only in Battlefield 3 Edit).mp4")
   pfile4 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/Bazooka_BF3_JET.png")
   video4.thumbnail.attach(io: pfile4, filename: "Bazooka_BF3_JET.png")

video5 = Video.create(title: "family_guy_cool_whip", description: "Gotta have cooh whip.", views: 13432, uploader_id: user_2.id)
   vfile5 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/family_guy_cool_whip_7ZmqJQ-nc_s_360p.mp4")
   video5.vid.attach(io: vfile5, filename: "family_guy_cool_whip_7ZmqJQ-nc_s_360p.mp4")
   pfile5 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/Cool_whip_Family_Guy.png")
   video5.thumbnail.attach(io: pfile5, filename: "Cool_whip_Family_Guy.png")

video6 = Video.create(title: "Ofdream_Thelema", description: "Ofdream Ambient track", views: 13432, uploader_id: user_1.id)
   vfile6 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/fdream_thelema_XCgjvjuE1fY_1080p.mp4")
   video6.vid.attach(io: vfile6, filename: "fdream_thelema_XCgjvjuE1fY_1080p.mp4")
   pfile6 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/THELEMA_TRAP_LIFE.png")
   video6.thumbnail.attach(io: pfile6, filename: "THELEMA_TRAP_LIFE.png")

video7 = Video.create(title: "Nirvana smells like teen spirit official music video", description: "Nirvana", views: 13432, uploader_id: user_1.id)
   vfile7 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/nirvana_smells_like_teen_spirit_official_music_video_hTWKbfoikeg_1080p.mp4")
   video7.vid.attach(io: vfile7, filename: "nirvana_smells_like_teen_spirit_official_music_video_hTWKbfoikeg_1080p.mp4")
   pfile7 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/Teen_Spirit_Nirvana.png")
   video7.thumbnail.attach(io: pfile7, filename: "Teen_Spirit_Nirvana.png")

video8 = Video.create(title: "Hack Reactor vs App Academy", description: "Spittin facts", views: 13432, uploader_id: user_2.id)
   vfile8 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/which_is_the_best_code_school_Lq4v2wIehos_360p.mp4")
   video8.vid.attach(io: vfile8, filename: "which_is_the_best_code_school_Lq4v2wIehos_360p.mp4")
   pfile8 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/Why_Hack_Is_better_than_a%3AA.png")
   video8.thumbnail.attach(io: pfile8, filename: "Why_Hack_Is_better_than_a:A.png")

video9 = Video.create(title: "Doggo Twix", description: "My boy", views: 13432, uploader_id: user_2.id)
   vfile9 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/TWIXY!.mp4")
   video9.vid.attach(io: vfile9, filename: "TWIXY!.mp4")
   pfile9 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/TWIXY.png")
   video9.thumbnail.attach(io: pfile9, filename: "TWIXY.png")

video10 = Video.create(title: "Royale with Cheese", description: "They don't Have the metric system!", views: 13432, uploader_id: user_2.id)
   vfile10 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/royale_with_cheese_pulp_fiction_212_movie_clip_1994_hd_6Pkq_eBHXJ4_720p.mp4")
   video10.vid.attach(io: vfile10, filename: "royale_with_cheese_pulp_fiction_212_movie_clip_1994_hd_6Pkq_eBHXJ4_720p.mp4")
   pfile10 = open("https://twixtertube-seed.s3-us-west-1.amazonaws.com/thumbnails/ROYALEWITHCHEESE.png")
   video10.thumbnail.attach(io: pfile10, filename: "ROYALEWITHCHEESE.png")