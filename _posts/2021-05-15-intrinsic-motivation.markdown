---
layout: post
title:  "Explanation-seeking: a better type of intrinsic motivation?"
date:   2021-05-15 05:09:15 +0000
categories: ai science rl benchmarking
---

Curiosity is a tantalizing topic for AI research.

Human knowledge increases without bound in part because we’re curious. We develop huge stores of knowledge about the world before we ever need to solve a specific task. Curiosity also seems to underlie our ability to do science. Both of these capabilities - developing general knowledge and doing science - are very attractive for AI systems, and there has been a lot of work in this direction.

The challenge is, how do we actually implement open-ended curiosity? There are a bunch of different ideas out there.

One is novelty. According to this interpretation, curiosity is about seeking out novel states of the world. The thinking goes something like this: the world is a big probability distribution over states, and developing more knowledge means exploring more of that probability distribution. To sample more and more of the world’s distribution, we should try taking novel actions in any given situation, thus letting us discover new information about what world-states exist, how common they are, and how our actions lead from one world-state to another.

Novelty is a fascinating objective but it faces a big challenge: there are a lot of novel states of the world, and most of them aren’t very interesting. A robot could spend all it’s time exploring novel configurations that simply aren’t valuable in the long run. For instance, think of quasi-random processes like static on a television screen or foam on a wave. Those are sources of endless novelty - and an AI that simply sought novelty could be diverted by them. You can imagine an AI finding a rich source of randomness and simply focusing on it forever.

Another idea that pops up in curiosity research is controllability. Perhaps instead of merely searching for novel situations, we should be searching for novel situations that we can control. That might help us avoid the trap of novelty for novelty’s sake. The intuition here is that controllability is a good stand-in for future usefulness. If you can control something, you can potentially use it to accomplish your future goals.

While novelty and controllability are important ideas, there is another element of curiosity that seems overlooked.

When we think about curiosity-driven knowledge, there’s an elephant in the room: science. 

Science is the crown jewel of the human intellect and the engine of knowledge creation in modern society, and although novelty and controllability are important for science, they don’t seem like the most important driving forces. It’s something else.

The central force behind science is the search for explanations.

What are explanations? Explanations are descriptions of how hidden components interact to produce a given set of observations.

What’s so special about explanations is that they don’t just allow us to make predictions about the present situation: they also tell us a huge amount of information about other situations that might arise, or that we could bring about intentionally.

How does the light bulb in my living room produce light? The explanation involves the wires in the ceiling. And that explanation encodes a huge amount of information about the world: including what would happen if anyone or anything were to cut those wires - me, the electrician, or a squirrel.

If explanations are the essence of knowledge, then curiosity - the thirst for knowledge - could be formalized as trying to find explanations for unexplained observations.

Why is this a useful formalization?

Firstly, the search for explanations yields a robust criterion for interestingness: a set of observations are interesting if they are unexplained. Parts of the world that are highly random will only be investigated so long as they remain unexplained. Once we have an explanation for how the random static on the TV screen is produced, we won’t find it interesting anymore, no matter how novel it continues to be.

Second, the search for explanations naturally produces knowledge about controllability. As in the case of the wires powering a lightbulb, an explanation encodes many ways of controlling the phenomenon being explained. So the search for explanations will naturally increase our knowledge about how to control the world to achieve future goals, even before those goals are specified.

If you’re interested in learning more about the role of explanations in human knowledge, I highly recommend The Beginning of Infinity by David Deutsch (cheesy title, great read), and In Search of Mechanisms: Discovering across the Life Sciences by Carl F. Craver and Lindley Darden.


