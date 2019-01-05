import React from 'react';

import {
  Text,
  Title,
  Code,
  SubHeading,
  InlineCode,
  Heading,
  Link,
  Ul,
  Li,
  Post,
} from '../../components';

export default () => {
  return (
    <Post title="Testing stuff">
      <Heading>Introduction</Heading>
      <Text>
        Chatkit is designed to make it as simple as possible to add chat features to your apps. It
        lets you add 1-1 and group chat to your app, along with typing indicators, online presence,
        and a flexible permissions system.
      </Text>
      <Heading>Example use cases</Heading>
      <Text>
        Our powerful API and SDKs allows you to build a multitude of different chat features quickly
        while being flexibile enough to suit many use cases, for example:
      </Text>
      <Ul>
        <Li>Adding social chat features in your app, whether that be 1-1 or group chat</Li>
        <Li>Player to player chat and presence in your multiplayer game</Li>
        <Li>
          Helping users work together in a collaborative app where inline discussion would be useful
        </Li>
        <Li>Live support chat between you and your customers</Li>
      </Ul>
      <Heading>Main features</Heading>
      <Text>
        In addition to core features such as creating rooms, users, and sending messages, the beta
        also includes:
      </Text>
      <Ul>
        <Li>
          Private and public rooms - You can choose to let anyone access a room, or make it private.
        </Li>
        <Li>Presence updates - Get updated when users change their online/offline status.</Li>
        <Li>Typing indicators - Receive events when users start or stop typing in rooms.</Li>
      </Ul>
      <Heading>Sample code</Heading>
      <Text>
        Below are a few snippets of sample Swift code to give you an idea of what integrating with
        Chatkit looks like in an iOS application. We also provide
        {' '}
        <Link href="https://github.com/pusher/chatkit-android">Android</Link>
        {' '}
and
        {' '}
        <Link href="https://github.com/pusher/chatkit-client-js">JavaScript</Link>
        {' '}
SDKs if you are
        building for Android or the web.
      </Text>

      <SubHeading>Connecting a client to the Chatkit servers</SubHeading>
      <Code language="swift" heading="LOLOLOL who knows?">
        {`
          let chatManager = ChatManager(
              instanceId: "your-chatkit-instance-id",
              tokenProvider: yourTokenProvider
          )

          chatManager.connect(delegate: yourDelegate) { currentUser, error in
              guard error == nil else {
                  print("Error connecting: \\(error.localizedDescription)")
                  return
              }
              print("Successfully connected")
          }
        `}
      </Code>

      <SubHeading>Creating a room</SubHeading>
      <Code language="swift">
        {`
        currentUser.createRoom(name: "my room name") { room, error in
            guard error == nil else {
                print("Error creating room: \\(error.localizedDescription)")
                return
            }
            print("Created room called \\(room.name)")
        }
      `}
      </Code>

      <SubHeading>Small code</SubHeading>
      <Code language="swift">let someTesting = "test"</Code>

      <SubHeading>Sending a message</SubHeading>
      <Code language="swift">
        {`
          currentUser.addMessage(text: "Hi there! 👋", to: myRoom) { message, error in
              guard error == nil else {
                  print("Error adding message to \\(room.name): \\(error.localizedDescription)")
                  return
              }
              print("Added message to \\(myRoom.name)")
          }
        `}
      </Code>

      <SubHeading>Receiving messages</SubHeading>
      <Code language="swift">
        {`
          // Inside something that conforms to the PCRoomDelegate protocol

          func newMessage(message: PCMessage) {
              print("Received message: \\(message.text) from \\(message.sender.debugDescription)")
          }
        `}
      </Code>

      <Heading>Setup overview</Heading>
      <Text>A typical setup comprises of three components:</Text>

      <Ul>
        <Li>
          Chatkit: The Pusher service that your clients will connect to for their chat
          functionality.
        </Li>
        <Li>Clients: Your many happy users loving their new chat functionality.</Li>
        <Li>
          Your server: Used for clients to request
          {' '}
          <Link href="/chatkit/authentication">authentication tokens</Link>
          {' '}
and to make admin
          requests to Chatkit.
        </Li>
      </Ul>

      <Heading>Known limitations</Heading>
      <Ul>
        <Li>Currently messages cannot be edited or deleted.</Li>
      </Ul>

      <SubHeading>Limits</SubHeading>
      <Text>
        There are certain limits that will be in place at least for the beta, detailed below:
      </Text>
      <Ul>
        <Li>Max users in a room: 100</Li>
        <Li>Max message size: 5KB</Li>
        <Li>
          Max
          {' '}
          <InlineCode>custom_data</InlineCode>
          {' '}
size when creating users: 5KB
        </Li>
        <Li>Max number of messages retrieved on resuming a room subscription: 100</Li>
        <Li>Max users that can be added or removed per HTTP request: 10</Li>
        <Li>Max room name length: 60 characters</Li>
      </Ul>

      <Heading>What next?</Heading>
      <Ul>
        <Li>
          <Link href="/chatkit/core-concepts">Check out Chatkit’s core concepts</Link>
        </Li>
        <Li>
          <Link href="/chatkit/reference/swift">Read up on the iOS SDK</Link>
        </Li>
        <Li>
          <Link href="https://github.com/pusher/chatkit-android">Read up on the Andoid SDK</Link>
        </Li>
        <Li>
          <Link href="https://github.com/pusher/chatkit-client-js">Read up on the JS SDK</Link>
        </Li>
      </Ul>
    </Post>
  );
};
