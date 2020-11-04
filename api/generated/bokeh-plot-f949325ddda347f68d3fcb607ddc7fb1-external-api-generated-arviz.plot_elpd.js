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
    
      
      
    
      var element = document.getElementById("1022d20e-7685-431f-8252-17a8a08414fe");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1022d20e-7685-431f-8252-17a8a08414fe' but no matching script tag was found.")
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
                    
                  var docs_json = '{"74c5d730-a48f-46de-97ab-c43d4848ee51":{"roots":{"references":[{"attributes":{"overlay":{"id":"64877"}},"id":"64871","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"64869"},{"id":"64870"},{"id":"64871"},{"id":"64872"},{"id":"64873"},{"id":"64874"},{"id":"64875"},{"id":"64876"}]},"id":"64879","type":"Toolbar"},{"attributes":{},"id":"64859","type":"LinearScale"},{"attributes":{},"id":"64855","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"64905"},"toolbar_location":"above"},"id":"64906","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"64878"}},"id":"64873","type":"LassoSelectTool"},{"attributes":{"toolbars":[{"id":"64879"}],"tools":[{"id":"64869"},{"id":"64870"},{"id":"64871"},{"id":"64872"},{"id":"64873"},{"id":"64874"},{"id":"64875"},{"id":"64876"}]},"id":"64905","type":"ProxyToolbar"},{"attributes":{},"id":"64897","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"64906"},{"id":"64904"}]},"id":"64907","type":"Column"},{"attributes":{},"id":"64901","type":"UnionRenderers"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"64897"},"ticker":{"id":"64866"}},"id":"64865","type":"LinearAxis"},{"attributes":{"callback":null},"id":"64876","type":"HoverTool"},{"attributes":{"data_source":{"id":"64889"},"glyph":{"id":"64888"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"64891"}},"id":"64890","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"64865"},"dimension":1,"ticker":null},"id":"64868","type":"Grid"},{"attributes":{"children":[[{"id":"64852"},0,0]]},"id":"64904","type":"GridBox"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"64888","type":"Cross"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"64902"},"selection_policy":{"id":"64901"}},"id":"64889","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"64861"}],"center":[{"id":"64864"},{"id":"64868"}],"left":[{"id":"64865"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"64890"}],"title":{"id":"64892"},"toolbar":{"id":"64879"},"toolbar_location":null,"x_range":{"id":"64853"},"x_scale":{"id":"64857"},"y_range":{"id":"64855"},"y_scale":{"id":"64859"}},"id":"64852","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"64895"},"ticker":{"id":"64862"}},"id":"64861","type":"LinearAxis"},{"attributes":{},"id":"64872","type":"WheelZoomTool"},{"attributes":{},"id":"64862","type":"BasicTicker"},{"attributes":{},"id":"64902","type":"Selection"},{"attributes":{},"id":"64870","type":"PanTool"},{"attributes":{"source":{"id":"64889"}},"id":"64891","type":"CDSView"},{"attributes":{},"id":"64874","type":"UndoTool"},{"attributes":{},"id":"64853","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"64878","type":"PolyAnnotation"},{"attributes":{},"id":"64866","type":"BasicTicker"},{"attributes":{},"id":"64875","type":"SaveTool"},{"attributes":{},"id":"64857","type":"LinearScale"},{"attributes":{"axis":{"id":"64861"},"ticker":null},"id":"64864","type":"Grid"},{"attributes":{},"id":"64869","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"64877","type":"BoxAnnotation"},{"attributes":{},"id":"64895","type":"BasicTickFormatter"},{"attributes":{"text":"centered model - non centered model"},"id":"64892","type":"Title"}],"root_ids":["64907"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"74c5d730-a48f-46de-97ab-c43d4848ee51","root_ids":["64907"],"roots":{"64907":"1022d20e-7685-431f-8252-17a8a08414fe"}}];
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