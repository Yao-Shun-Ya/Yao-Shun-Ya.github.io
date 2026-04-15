import os
import re

# ================= 配置区 =================
# 你的 Release 资源基础前缀 (末尾一定要带斜杠 /)
RELEASE_BASE_URL = "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/"

# 需要处理的文件列表
TARGET_FILES = ['download/resources.js', 'songs.js']
# ==========================================

def update_audio_links():
    print("📝 开始将全站音频路径切换为 GitHub Release 远程直链...")
    
    # 匹配本地路径格式：/download/资源仓库文件/文件夹/文件名.后缀
    # 并捕获最后的文件名部分
    local_pattern = r'["\']/download/资源仓库文件/.*?/([^/]+?\.(?:wav|mp3|m4a|flac|rar))["\']'

    for file_path in TARGET_FILES:
        if not os.path.exists(file_path):
            print(f"⚠️ 跳过：未找到文件 {file_path}")
            continue

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 执行正则替换
        # 逻辑：把整个引号内的本地路径，替换为 RELEASE_BASE_URL + 捕获的文件名
        new_content = re.sub(local_pattern, f'"{RELEASE_BASE_URL}\\1"', content)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ 已成功更新: {file_path}")

    print("\n🏁 链接修补完成！")
    print(f"💡 现在的下载链接格式已变为: {RELEASE_BASE_URL}文件名.wav")

if __name__ == "__main__":
    update_audio_links()