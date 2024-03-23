import React, { useState, useEffect } from 'react';

import "../chatGptChatting/css/style.css"



export default function ChatGptMessaging() {

    const url_prefix="http://127.0.0.1:1338"
    
  

    return (
		<div class="main-container" className="bg-white">
			<div class="box sidebar">
				<button class="button" id="sidebar-button" onclick="new_conversation()">
					<i class="fa-regular fa-plus"></i>
					<span>{('New Conversation')}</span>
				</button>
				<div class="top">					
					<div class="spinner"></div>
				</div>
				<div class="sidebar-footer">
						<div class="settings-container">
								<div class="field">
									<span>{('Model')}</span>
									<select class="dropdown" name="model" id="model">
										<option value="gpt-3.5-turbo" selected="">GPT-3.5-turbo</option>
										<option value="gpt-4">GPT-4</option>
										<option value="llama2-70b">LLaMA2-70b</option>
										<option value="gemini-pro">Gemini-pro</option>
									</select>
								</div>
								<div class="field">
									<span>{('Provider')}</span>
										<select class="dropdown" name="provider" id="provider">
											<option value="g4f.Provider.Auto" selected>Auto</option>
											<option value="g4f.Provider.ChatgptLogin">ChatGPT Login</option>
											<option value="g4f.Provider.Bing">Bing</option>											
											<option value="g4f.Provider.Llama2">Llama2</option>
											<option value="g4f.Provider.Liaobots">Liaobots</option>
											<option value="g4f.Provider.Phind">Phind</option>
											<option value="g4f.Provider.You">You</option>																					
									</select>
								</div>
								<div class="field">
									<span>{('Jailbreak')}</span>
										<select class="dropdown" name="jailbreak" id="jailbreak">
										<option value="default" selected>{('Default')}</option>
										<option value="gpt-dan-11.0">{('DAN')}</option>
										<option value="gpt-evil">{('Evil')}</option>
									</select>
								</div>
								<div class="field">
									<span>{('Language')}</span>
									<select
									class="dropdown"
									id="language"
									onchange="changeLanguage(this.value)"></select>
								</div>
								<div class="field checkbox">
									<span>{('Web Access')}</span>									
									<input type="checkbox" id="switch" />
									<label for="switch"></label>
								</div>
								<div class="field checkbox">
									<span>{('Dark Mode')}</span>
									<input type="checkbox" id="theme-toggler" />
									<label for="theme-toggler"></label>
								</div>
								<div class="field checkbox fullscreen">
									<span>{('Fullscreen Mode')}</span>
									<input type="checkbox" id="fullscreen-toggle" />
									<label for="fullscreen-toggle"></label>
								</div>	
					</div>
					<a class="info" href="https://github.com/VadimBoev/freegpt-webui-v2" target="_blank">
						<i class="fa-brands fa-github"></i>
						<span class="conversation-title"> {('Version')}: 0.8 </span>
					</a>
				</div>
			</div>
			<div class="conversation">
				<div class="stop-generating stop-generating-hidden">
					<button class="button" id="cancelButton">
						<span>{'Stop Generating'}</span>
					</button>
				</div>
				<div class="box" id="messages"></div>
				<div class="user-input">
					<div class="box input-box">
						<textarea
							id="message-input"
							placeholder="{('Ask a question')}"
							cols="30"
							rows="10"
							style={{whiteSpace: "pre-wrap"}}></textarea>
						<div id="send-button">
							<i class="fa-regular fa-paper-plane-top"></i>
						</div>
					</div>
				</div>
				
			</div>
		</div>
    );
}
