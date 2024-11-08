from moviepy.editor import VideoFileClip

# Load the video
video = VideoFileClip("Additional_consideration.mp4")

# Select a subclip (e.g., from 10s to 20s)
clip = video.subclip(0, 20)

# Resize the clip (optional)


# Convert to GIF with a specified frame rate
clip.write_gif("Additional_consideration.gif", fps=10)

print("GIF has been created successfully!")
