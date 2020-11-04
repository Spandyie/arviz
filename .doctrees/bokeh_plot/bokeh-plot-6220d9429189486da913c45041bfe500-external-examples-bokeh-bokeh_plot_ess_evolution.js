(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("cf2c65d3-9db5-4716-a664-2a82e454e0a0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cf2c65d3-9db5-4716-a664-2a82e454e0a0' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"91ca73cd-c2ea-4803-b6c9-b255e497df5c":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68064"},{"id":"68065"},{"id":"68066"},{"id":"68067"},{"id":"68068"},{"id":"68069"},{"id":"68070"},{"id":"68071"}]},"id":"68074","type":"Toolbar"},{"attributes":{"source":{"id":"68093"}},"id":"68097","type":"CDSView"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"68086"},{"id":"68091"}]},"id":"68105","type":"LegendItem"},{"attributes":{"text":"b"},"id":"68107","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68100","type":"Circle"},{"attributes":{"callback":null},"id":"68071","type":"HoverTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68103","type":"Span"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68095","type":"Line"},{"attributes":{"above":[{"id":"68104"}],"below":[{"id":"68056"}],"center":[{"id":"68059"},{"id":"68063"}],"left":[{"id":"68060"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68086"},{"id":"68091"},{"id":"68096"},{"id":"68101"},{"id":"68103"}],"title":{"id":"68107"},"toolbar":{"id":"68074"},"toolbar_location":null,"x_range":{"id":"68048"},"x_scale":{"id":"68052"},"y_range":{"id":"68050"},"y_scale":{"id":"68054"}},"id":"68047","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68065","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68121"},"selection_policy":{"id":"68120"}},"id":"68093","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"68073"}},"id":"68068","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"68088"},"glyph":{"id":"68089"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68090"},"selection_glyph":null,"view":{"id":"68092"}},"id":"68091","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"68056"},"ticker":null},"id":"68059","type":"Grid"},{"attributes":{"children":[{"id":"68127"},{"id":"68125"}]},"id":"68128","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68117"},"selection_policy":{"id":"68116"}},"id":"68083","type":"ColumnDataSource"},{"attributes":{},"id":"68112","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"68047"},0,0]]},"id":"68125","type":"GridBox"},{"attributes":{"axis_label":"ESS","formatter":{"id":"68112"},"ticker":{"id":"68061"}},"id":"68060","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68084","type":"Circle"},{"attributes":{},"id":"68123","type":"Selection"},{"attributes":{},"id":"68064","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68085","type":"Circle"},{"attributes":{"data_source":{"id":"68083"},"glyph":{"id":"68084"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68085"},"selection_glyph":null,"view":{"id":"68087"}},"id":"68086","type":"GlyphRenderer"},{"attributes":{},"id":"68054","type":"LinearScale"},{"attributes":{},"id":"68050","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68089","type":"Line"},{"attributes":{},"id":"68070","type":"SaveTool"},{"attributes":{"data_source":{"id":"68098"},"glyph":{"id":"68099"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68100"},"selection_glyph":null,"view":{"id":"68102"}},"id":"68101","type":"GlyphRenderer"},{"attributes":{},"id":"68116","type":"UnionRenderers"},{"attributes":{},"id":"68121","type":"Selection"},{"attributes":{},"id":"68061","type":"BasicTicker"},{"attributes":{"click_policy":"hide","items":[{"id":"68105"},{"id":"68106"}],"location":"center_right","orientation":"horizontal"},"id":"68104","type":"Legend"},{"attributes":{},"id":"68120","type":"UnionRenderers"},{"attributes":{"source":{"id":"68088"}},"id":"68092","type":"CDSView"},{"attributes":{},"id":"68117","type":"Selection"},{"attributes":{},"id":"68069","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68119"},"selection_policy":{"id":"68118"}},"id":"68088","type":"ColumnDataSource"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"68101"},{"id":"68096"}]},"id":"68106","type":"LegendItem"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68073","type":"PolyAnnotation"},{"attributes":{"source":{"id":"68083"}},"id":"68087","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68094","type":"Line"},{"attributes":{"data_source":{"id":"68093"},"glyph":{"id":"68094"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68095"},"selection_glyph":null,"view":{"id":"68097"}},"id":"68096","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"68072"}},"id":"68066","type":"BoxZoomTool"},{"attributes":{},"id":"68119","type":"Selection"},{"attributes":{},"id":"68067","type":"WheelZoomTool"},{"attributes":{},"id":"68057","type":"BasicTicker"},{"attributes":{},"id":"68122","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68072","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68090","type":"Line"},{"attributes":{},"id":"68048","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68123"},"selection_policy":{"id":"68122"}},"id":"68098","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68099","type":"Circle"},{"attributes":{"toolbar":{"id":"68126"},"toolbar_location":"above"},"id":"68127","type":"ToolbarBox"},{"attributes":{},"id":"68118","type":"UnionRenderers"},{"attributes":{},"id":"68052","type":"LinearScale"},{"attributes":{},"id":"68110","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"68074"}],"tools":[{"id":"68064"},{"id":"68065"},{"id":"68066"},{"id":"68067"},{"id":"68068"},{"id":"68069"},{"id":"68070"},{"id":"68071"}]},"id":"68126","type":"ProxyToolbar"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"68110"},"ticker":{"id":"68057"}},"id":"68056","type":"LinearAxis"},{"attributes":{"source":{"id":"68098"}},"id":"68102","type":"CDSView"},{"attributes":{"axis":{"id":"68060"},"dimension":1,"ticker":null},"id":"68063","type":"Grid"}],"root_ids":["68128"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"91ca73cd-c2ea-4803-b6c9-b255e497df5c","root_ids":["68128"],"roots":{"68128":"cf2c65d3-9db5-4716-a664-2a82e454e0a0"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();